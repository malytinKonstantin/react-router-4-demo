import React from 'react';
import {Link} from 'react-router-dom';

function Card({ book }) {
    const href = `/books/${book.topic}/${book.slug}`;

    return <div className="mdc-card">
        <div className="mdc-card__horizontal-block">
          <Link to={href}>
            <img src={`/img/books/${book.cover}`} className="mdc-card__media-item mdc-card__media-item--2x" alt={book.title} />
          </Link>
          <section className="mdc-card__primary">
            <h2 className="mdc-card__title mdc-card__title--large">
              {book.title}
            </h2>
            <p className="mdc-card__subtitle">{book.author}</p>
            <p className="mdc-card__subtitle">
              {book.publisher}, {book.year}
            </p>
          </section>
        </div>

        <section className="mdc-card__actions">
          <Link to={href} className="mdc-button mdc-card__action">
            Подробнее
          </Link>
        </section>
      </div>;
}

export default Card;