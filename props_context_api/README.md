# React Notes – Props & Context API

## 1. Props

* Props = Parent ➜ Child data pass karne ka way.
* Props **read-only** hote hain (Child unhe change nahi kar sakta).
* Data flow = **One Way (Top ➜ Bottom)**.

### Syntax

```jsx
// Parent
<Student name="Riya" age={20} />

// Child
function Student({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </>
  );
}
```

### Props me kya pass kar sakte hain?

* String
* Number
* Boolean
* Array
* Object
* Function

Example:

```jsx
<Student
  name="Riya"
  age={20}
  isStudent={true}
  hobbies={["Coding", "Music"]}
  user={{ city: "Kolkata" }}
  greet={handleClick}
/>
```

---

## 2. Prop Drilling

Jab ek hi data ko Parent se bahut saare beech ke components ke through pass karna padta hai.

Example:

```
App
 ↓
Navbar
 ↓
Profile
 ↓
Avatar
```

Problem:

* Code lamba ho jata hai.
* Unnecessary props pass karne padte hain.
* Maintain karna mushkil ho jata hai.

---

## 3. Context API

Context API prop drilling ki problem solve karta hai.

Isme data ek jagah store hota hai aur jis component ko zarurat ho, woh direct use kar sakta hai.

### Steps

### Step 1: Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

### Step 2: Wrap Provider

```jsx
<UserContext.Provider value={{ name: "Riya" }}>
  <App />
</UserContext.Provider>
```

### Step 3: Use Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h1>{user.name}</h1>;
}
```

---

## Context API Kab Use Kare?

✅ Logged-in User

✅ Theme (Dark / Light)

✅ Language

✅ Authentication

✅ Global Settings

❌ Har chhoti state ke liye Context API mat use karo.

---

## Interview Points

* Props = Parent ➜ Child data pass karte hain.
* Props are Read Only.
* React follows One-Way Data Flow.
* Prop Drilling = Multiple levels tak props pass karna.
* Context API = Global data sharing without prop drilling.
* `createContext()` ➜ Context banata hai.
* `Provider` ➜ Data provide karta hai.
* `useContext()` ➜ Data consume karta hai.

---

## Easy Trick to Remember

**Props = Parent ➜ Child**

**Prop Drilling = Parent ➜ Child ➜ Child ➜ Child 😫**

**Context API = Global Data 📦 (Direct Access)**
