import * as React from 'react';
import { ICommentsState } from '../../states/ducks/comments';

class Comments extends React.Component<any> {
  constructor(props: ICommentsState) {
    super(props);
  }

  public componentDidMount = () => {
    this.props.fetchData('https://594ecc215fbb1a00117871a4.mockapi.io/comments');
  }

  public render() {
    if (this.props.hasError) {
      return <p> error </p>;
    }
    if (this.props.isLoading) {
      return <p> Loading...</p>;
    }
    return (
      <ul>
        {this.props.comments.map((item: any) => (
          <li key={item.id}>
            {item.comment}
          </li>
        ))}
        {/*
        */}
      </ul>
    );
  }
}

export default Comments;