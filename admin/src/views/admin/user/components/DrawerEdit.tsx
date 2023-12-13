import { useState, useEffect } from "react";

type EditDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  data: { module: string; id: string } | null;
};

const DrawerEdit: React.FC<EditDrawerProps> = ({ isOpen, onClose, data }) => {
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      fetch(
        `${process.env.REACT_APP_API_URL}${data.module}s${
          data.module === "user" ? "" : "/" + data.module
        }/${data.id || 1}`,
        {
          credentials: "include",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [data]);

  const handleSave = () => {
    if (formData) {
      const url = `${process.env.REACT_APP_API_URL}${data.module}s/${data.module}/${data.id}`;
      const method = "PUT";

      fetch(url, {
        method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data updated successfully:", data);
          onClose();
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    }
  };

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      className={`fixed inset-0 z-50 transform overflow-hidden transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <section className="absolute inset-y-0 right-0 flex max-w-full pl-10">
          <div className="w-screen max-w-md">
            <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
              <div className="h-0 flex-1 overflow-y-auto">
                <header className="space-y-1 bg-blue-700 px-4 py-6 sm:px-6">
                  <div className="flex items-center justify-between space-x-3">
                    <h2 className="text-lg font-medium text-white">
                      Edit {data ? data.module : ""}
                    </h2>
                    <div className="flex h-7 items-center">
                      <button
                        onClick={onClose}
                        className="rounded-md bg-blue-700 text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span className="sr-only">Close panel</span>
                      </button>
                    </div>
                  </div>
                </header>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="px-4 sm:px-6">
                    {formData ? (
                      Object.keys(formData).map((key) =>
                        key !== "id" ? (
                          <div key={key} className="relative mt-6 flex-1">
                            <label
                              htmlFor={key}
                              className="block text-sm font-medium text-gray-900"
                            >
                              {key}
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name={key}
                                id={key}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                value={formData[key] || ""}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        ) : null
                      )
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                  <div className="flex-shrink-0 px-4 pb-4 sm:px-6">
                    <button
                      onClick={handleSave}
                      type="button"
                      className="border-transparent inline-flex w-full justify-center rounded-md border bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DrawerEdit;
