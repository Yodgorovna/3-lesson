import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <div className="col-span-full">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            About
          </label>
          <div className="mt-2 flex">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
            <button class="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border border-gray-300 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
