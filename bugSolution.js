The bug is likely caused by improper state management or a failure to trigger a re-render when the component's state changes.  Using `useState` hook and ensuring that the component re-renders when the state changes solves the issue.

**bug.js (Before fix):**
```javascript
import React, { useState } from 'react';

function MyButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <button className={isActive ? 'bg-blue-500' : 'bg-gray-300'} onClick={handleClick}>
      Click Me
    </button>
  );
}
export default MyButton;
```
**bugSolution.js (After fix):**
```javascript
import React, { useState } from 'react';

function MyButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={`bg-${isActive ? 'blue-500' : 'gray-300'}`} onClick={handleClick}>
      Click Me
    </button>
  );
}

export default MyButton;
```