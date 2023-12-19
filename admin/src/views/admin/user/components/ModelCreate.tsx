import { useState, useEffect } from "react";
import Switch from "components/switch";
import ReactDOM from "react-dom";
import axios from "axios";
const ModalCreate: React.FC<{ module: string; children: React.ReactNode }> = ({
  module,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fields, setFields] = useState([]);
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});


  useEffect(() => {
    const getFields = async (module: string): Promise<string[]> => {
      console.log("getFields")
      try {
        console.log(`${process.env.REACT_APP_API_URL}${module}s${
          module === "user" ? "" : "/" + module
        }/2`)
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}${module}s${
            module === "user" ? "" : "/" + module
          }/check`,
          {
            withCredentials: true,
          }
        );
          console.log("response ",response)
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const result: any = response.data;

        let fields = Object.keys(result);

        const excludedFields = ["created_at", "updated_at", "id"];
        fields = fields.filter((field) => !excludedFields.includes(field));
        console.log("fields",fields)
        return fields;
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    const fetchFields = async () => {
      const fields = await getFields(module);
      setFields(fields);
    };

    fetchFields();
  }, [module]);

  const handleChange = (event: any) => {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    if (event.target.name.endsWith("id")) {
      value = Number(value);
    } else if (event.target.name.endsWith("time")) {
      value = new Date(value).toISOString().slice(0, 16);
    }
    setFormValues({
      ...formValues,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async () => {
    // Convert date-time strings into Date instances
    const data = Object.fromEntries(
      Object.entries(formValues).map(([key, value]) => {
        if (key.endsWith("time")) {
          console.log(value);
          value = new Date(value).toISOString();
          console.log(value);
        }
        return [key, value];
      })
    );

    const createItem = async (module: string, data: { [key: string]: any }) => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}${module}s/${module}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("-response------------")
      console.log(response)
      console.log("-------------")
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("-resulte------------")
      console.log(result)
      console.log("-------------")
      return result;
    };
    await createItem(module, data);
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      {isOpen &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
                aria-hidden="true"
                onClick={() => setIsOpen(false)}
              ></div>

              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
                <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Create a new {module}
                  </h3>
                  <div className="mt-2">
                    {fields.map((field) => (
                      <div key={field} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          {field}
                        </label>
                        {field.endsWith("time") ? (
                          <input
                            type="datetime-local"
                            name={field}
                            value={formValues[field]}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-b-2 pl-1 shadow-md outline-none focus:border-indigo-300"
                          />
                        ) : field === "lock" ? (
                          <Switch
                            name={field}
                            checked={formValues[field]}
                            onChange={handleChange}
                            color="blue"
                          />
                        ) : (
                          <input
                            type={field.endsWith("id") ? "number" : "text"}
                            name={field}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-b-2 pl-1 shadow-md outline-none focus:border-indigo-300"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="border-transparent inline-flex w-full justify-center rounded-md border bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ModalCreate;
