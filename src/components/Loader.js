import React from 'react';
// const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
// const showLoader = () => loader.classList.remove('loader--hide');

// const hideLoader = () => loader.classList.add('loader--hide');

class Loader extends React.Component {
  state = {
    animating: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animating: false });
      alert("はじまるよー！");
    }, 5000);
  }

  render() {
    return (
      <>
     
     <div class="loader"></div>
          </>
    );
  }
}

// the setTimeout simulates the time it takes react to load, and is not part of the solution
// setTimeout(() =>
//   // the show/hide functions are passed as props
//   render(
//     <div
//       hideLoader={hideLoader}
//       showLoader={showLoader}
//     />,
//     document.getElementById('app')
//   )
//   , 1000);

export default Loader;