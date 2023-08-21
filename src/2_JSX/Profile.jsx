// Quy tắc 1: JSX không có phép có 2 thẻ đồng cấp ngoài cùng, thường phải bọc thẻ div ở ngoài cùng
// Trường hợp không muốn dư thẻ div, có thể sử dụng Fragment <></>

// Quy tắc 2: Vì JSX là Javascript nên có 1 số từ khoá của html bị thay thế, các thuộc tính đều viết dạng camelCase
// VD: class -> className, onclick -> onClick, ...

// Quy tắc 3: Khi muốn sử dụng javascript trong JSX, ta bọc chúng vào cặp ngoặc nhọn {}

function Profile() {
  let name = "Alice";

  const getClassName = () => {
    return "BC52";
  };

  return (
    <>
      <h1 className="title">Name: {name}</h1>
      <h3 style={{ color: "red", fontWeight: 600 }}>Class: {getClassName()}</h3>
    </>
  );
}

export default Profile;
