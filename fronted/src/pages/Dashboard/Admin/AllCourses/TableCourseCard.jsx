import { MdModeEdit } from "react-icons/md";
const TableCourseCard = () => {
    return (
        <div>
        <div className="w-full overflow-x-auto">
          <table
            className="w-full text-left border-collapse rounded w-overflow-x-auto "
            cellspacing="0"
          >
            <tbody>
              <tr className="border-b border-slate-300 ">
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Title & Category
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Instruction
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Price
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Duration
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Ratings
                </th>
              </tr>
              <tr className="border-b  border-slate-200">
                <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <img
                    className="w-[60px]  h-[60px] rounded-xl"
                    src="https://i.pravatar.cc/48?img=1"
                    alt=""
                  />
                </td>

                <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  javaScript
                </td>
                <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  javaScript
                </td>
                <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  javaScript
                </td>
                <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  javaScript
                </td>
                <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  javaScript
                </td>
                <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <button className="text-2xl font-bold bg-black px-3 py-5 text-white rounded-xl hover:bg-gray-700">
                    <MdModeEdit />
                  </button>
                </td>
                <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <button className="text-2xl font-bold bg-red-600 p-4 text-white rounded-xl hover:bg-black">
                    x
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default TableCourseCard;