import React from "react";
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Привет, мир!</h1>
      <p className="lead">
        Это простой пример блока с компонентом в стиле jumbotron для привлечения
        дополнительного внимания к содержанию или информации.
      </p>
      <hr className="my-4" />
      <p>
        Использются служебные классы для типографики и расстояния содержимого в
        контейнере большего размера.
      </p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/" role="button">
          Learn more
        </Link>
      </p>
    </div>
  );
}
