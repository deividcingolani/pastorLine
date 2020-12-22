export function ShowList({
  setDetailedModal,
  setContactSelected,
  options,
  status,
}) {
  const { contacts } = options;
  let myArray = [];
  for (const key in contacts) {
    myArray.push([key, contacts[key]]);
  }
  return (
    <ul className="list-group">
      {myArray.map((contact, index) => {
        return (
          <li
            className="list-group-item"
            onClick={() => {
              setDetailedModal(true);
              console.log(index);
              setContactSelected(myArray[index][1]);
            }}
            key={index}
          >
            {contact[1].first_name + " " + contact[1].last_name}
          </li>
        );
      })}
    </ul>
  );
}
