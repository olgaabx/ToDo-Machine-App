import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

	useEffect(() => {
		setTimeout(() => {
			try {
        const localStorageItem = localStorage.getItem(itemName);
			  let parsedItem;

			  if (!localStorageItem) {
				localStorage.setItem(itemName, JSON.stringify(initialValue));
				parsedItem = initialValue;
			  } else {
				parsedItem = JSON.parse(localStorageItem);
			  }

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
		}, 1000);
	});

	//para persistir la información de nuestras funciones en el LS
	const saveItem = (newItem) => {
		try {
      const stringifiedItem = JSON.stringify(newItem);
		  localStorage.setItem(itemName, stringifiedItem);
		  setItem(newItem);
    } catch(error) {
      setError(error);
    }
	};
	//retornamos los datos que necesitamos
	return {
    item, 
    saveItem, 
    loading,
    error
  };
};

export { useLocalStorage };