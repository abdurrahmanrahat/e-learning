import React, { useState, useEffect } from 'react';

const BlogFormModal = ({ isEditing, selectedBlog, closeModal }) => {
      const [title, setTitle] = useState('');
      const [author, setAuthor] = useState('');
      const [publishedDate, setPublishedDate] = useState('');

      useEffect(() => {
            if (isEditing && selectedBlog) {
                  setTitle(selectedBlog.title);
                  setAuthor(selectedBlog.author.name);
                  setPublishedDate(new Date(selectedBlog.publishedDate).toISOString().split('T')[0]);
            }
      }, [isEditing, selectedBlog]);

      const handleSubmit = (e) => {
            e.preventDefault();
            const newBlog = { title, author: { name: author }, publishedDate };
            if (isEditing) {
                  // Call update function with selectedBlog._id and updated data
            } else {
                  // Call add function with new blog data
            }
            closeModal(); // Close modal after submitting
      };

      return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-2xl font-semibold mb-4">{isEditing ? 'Update Blog' : 'Add New Blog'}</h2>
                        <form onSubmit={handleSubmit}>
                              <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                          type="text"
                                          className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                          value={title}
                                          onChange={(e) => setTitle(e.target.value)}
                                          required
                                    />
                              </div>
                              <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Author</label>
                                    <input
                                          type="text"
                                          className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                          value={author}
                                          onChange={(e) => setAuthor(e.target.value)}
                                          required
                                    />
                              </div>
                              <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Published Date</label>
                                    <input
                                          type="date"
                                          className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                          value={publishedDate}
                                          onChange={(e) => setPublishedDate(e.target.value)}
                                          required
                                    />
                              </div>
                              <div className="flex justify-end">
                                    <button type="button" className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-lg" onClick={closeModal}>Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-[#49BBBD] text-white rounded-lg">{isEditing ? 'Update' : 'Add'}</button>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default BlogFormModal;
