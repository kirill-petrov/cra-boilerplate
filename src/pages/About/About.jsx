import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// вложенные маршруты
import Offers from '../Offers/Offers';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      <button
        type="button"
        onClick={() => navigate('/about/offers')}
      >
        See offers
      </button>

      <Routes>
        <Route
          path="offers"
          element={<Offers />}
        />
      </Routes>
    </div>
  );
}
