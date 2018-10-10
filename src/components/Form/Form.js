import React from 'react';

const App = (props) => {
    const {
      count,
      processing,
      type,
      handleChange,
      handleSubmit
    } = props;

    return (
        <div className="app_form">
          <label>
            Count (1-10):
            <input
              type="number"
              name="count"
              value={count}
              onChange={e => handleChange('count', e.target.value)}
            />
          </label>
          <label>
            Type:
            <select
              value={type}
              onChange={e => handleChange('type', e.target.value)}
            >
              <option value="shibes">shibes</option>
              <option value="cats">cats</option>
              <option value="birds">birds</option>
              <option value="random">random</option>
            </select>
          </label>
          <input
            type="submit"
            value="Submit"
            disabled={processing}
            onClick={handleSubmit}
          />
        </div>
    );
};

export default App;
