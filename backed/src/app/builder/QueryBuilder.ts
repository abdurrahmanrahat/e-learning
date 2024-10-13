import { FilterQuery, Query } from 'mongoose';

export class QueryBuilder<T> {
  public query: Record<string, unknown>; // payload
  public modelQuery: Query<T[], T>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.query = query;
    this.modelQuery = modelQuery;
  }

  // searching
  search(searchAbleFields: string[]) {
    let searchTerm = '';
    if (this.query?.searchTerm) {
      searchTerm = this.query.searchTerm as string;
    }

    this.modelQuery = this.modelQuery.find({
      $or: searchAbleFields.map(
        (field) =>
          ({
            [field]: { $regex: searchTerm, $options: 'i' },
          }) as FilterQuery<T>,
      ),
    });

    return this;
  }

  paginate() {
    const limit = Number(this.query?.limit || 10);
    let skip = 0;
    let page = 1;

    if (this.query?.page) {
      page = Number(this.query.page);
      skip = Number((page - 1) * limit);
    }

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }

  sort() {
    let sortBy = '';
    // asy (sortBy) -- dsy (-sortBy)

    if (this.query?.sortBy) {
      sortBy = this.query.sortBy as string;
    }

    this.modelQuery = this.modelQuery.sort(sortBy);

    return this;
  }

  fieldsFiltering() {
    //----------- field filtering (that means we just need those property from server)
    // { fields: a, b, c }

    let fields = '';

    if (this.query?.fields) {
      fields = (this.query.fields as string).split(',').join(' ');
    }

    this.modelQuery = this.modelQuery.select(fields);

    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    // queryObj.status = 'approved';

    const excludeFields = ['searchTerm', 'page', 'limit', 'sortBy', 'fields'];

    excludeFields.forEach((element) => delete queryObj[element]);

    // Transform queryObj to apply case-insensitive filtering
    for (const key in queryObj) {
      if (typeof queryObj[key] === 'string') {
        queryObj[key] = { $regex: new RegExp(queryObj[key] as string, 'i') }; // Make case-insensitive
      }
    }

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

    return this;
  }
}
