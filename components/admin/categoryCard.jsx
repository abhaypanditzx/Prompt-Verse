import React from 'react'

const CategoryCard = ({category,setOpenMenu,openMenu,handleDelete}) => {
  return (
    <div
            key={category._id}
            className="bg-white rounded-lg shadow p-4 flex gap-4 items-center relative"
          >
            {/* Image */}

            <img
              src={category.image}
              alt={category.title}
              className="h-20 w-20 object-cover rounded"
            />

            {/* Text */}

            <div className="flex-1">
              <p className="font-semibold">{category.title}</p>

              <p className="text-sm text-gray-600">{category.promptCount}</p>
            </div>

            {/* Menu */}

            <div className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === category._id ? null : category._id)
                }
                className="text-xl px-2"
              >
                ⋮
              </button>

              {openMenu === category._id && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow">
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
  )
}

export default CategoryCard