import * as React from 'react';

const App = (props: any) => {
  if (props.hasError) {
    return <p> error </p>;
  }
  if (props.isLoading) {
    return <p> Loading...</p>;
  }

  return (
    <ul>
      {props.comments.map((item: any) => (
        <li key={item.id}>
          {item.comment}
        </li>
      ))}
    </ul>
  );
}

export default App;