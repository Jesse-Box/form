import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Send Feedback</h1>
<form>
  <label for="full-name">Full Name</label>
  <input type="text" id="full-name" name="full-name" placeholder="Full Name">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Email" required/>
  <label for="description">Description</label>
  <textarea id="email" name="email" placeholder="Whats the issue? What did you expect?" rows=8 required></textarea>
  <input type="submit" value="Send Feedback">
</form>
`;
