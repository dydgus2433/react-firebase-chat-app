import React from "react";

function RegisterPage() {
  return (
    <form>
      <label>Example</label>
      {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" />

      <label>exampleRequired</label>
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" />
      {/* errors will return when field validation fails  */}

      <input type="submit" />
    </form>
  );
}

export default RegisterPage;
