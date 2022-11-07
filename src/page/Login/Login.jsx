import "./Login.css";
import { useState, useContext } from "react";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import bgLogin from "../../assets/img/bg-login.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const users = [
    {
      username: "quochoi@gmail.com",
      password: "12345",
      name: "DAO QUOC HOI",
      slug: "sinhvien",
      number: "123456789",
      role: "Sinh vien",
    },
    {
      username: "hoangha@gmail.com",
      password: "12345",
      name: "Pham Hoang Ha",
      slug: "giangvien",
      number: "123456789",
      role: "Giang Vien",
    },
    {
      username: "giaovukhoa@gmail.com",
      password: "12345",
      name: "Giao vu khoa",
      slug: "giaovukhoa",
      number: "123456789",
      role: "Giao vu khoa",
    },
  ];

  const listOptions = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "vuongankhang1606@gmail.com",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
    },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let k = 0;
    if (
      values.email.split("").reverse().join("").slice(0, 10) === "moc.liamg@"
    ) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === values.email) {
          if (users[i].password === values.password) {
            k = 1;
            navigate(`/${users[i].slug}`, { state: users[i] });
            break;
          }
        }
      }
    }
    if (k === 0) {
      alert("tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="login">
      <div className="login__thumbnail">
        <div
          className="bg-img"
          style={{ backgroundImage: `url(${bgLogin})` }}
        ></div>
      </div>
      <div className="login__container">
        <form className="form">
          <h2 className="form__title">Đăng nhập</h2>
          <p>Đăng nhập để xem tkb</p>
          {listOptions.map((option, index) => (
            <FormItem key={index} onChange={handleChange} {...option} />
          ))}
          <div className="form__btn">
            <Button onClick={handleLogin}>login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

const FormItem = ({ label, name, onChange, errorMessage, ...inputProps }) => {
  const [focus, setFocus] = useState(true);

  return (
    <div className="form__item">
      <label htmlFor={`${name}`}>{label}:</label>
      <input
        id={`${name}`}
        name={name}
        {...inputProps}
        onChange={onChange}
        focus={focus.toString()}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
      <span className="form__error">{errorMessage}</span>
    </div>
  );
};
