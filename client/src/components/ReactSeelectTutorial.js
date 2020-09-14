// import React, { useState, useRef } from 'react';
// import select from 'react-select';
// import makeAnimated from 'react-select/animated';
// import Select from 'react-select';

// function ReactSeelectTutorial() {
//   const ref = useRef();
//   const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
//   ];

//   const [selectedOption, setSelectedOption] = useState(null);
//   return (
//     <div>
//       <Select
//         defaultValue={selectedOption}
//         onChange={setSelectedOption}
//         options={options}
//       />
//     </div>
//   );
// }

// export default ReactSeelectTutorial;

import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class ReactSeelectTutorial extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default ReactSeelectTutorial;
