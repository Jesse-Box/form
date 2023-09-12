import "./styles.css";

document.getElementById("app").innerHTML = `
<section class="uf-base uf-container">
  <div class=uf-container-header>
    <h3 class="uf-heading">Share Feedback</h3>
  </div>
  <form id="form" class="uf-container-main">
    <label class="uf-label" for="fullName">Full Name</label>
    <input type="text" id="fullName" class="uf-input" name="fullName" placeholder="Full Name">
    <label class="uf-label" for="email">Email</label>
    <input type="email" id="email" class="uf-input" name="email" placeholder="Email" required/>
    <label class="uf-label" for="description">Description</label>
    <textarea id="description" class="uf-textarea" name="description" placeholder="Whats the issue? What did you expect?" rows=8 required></textarea>
  </form>
  <section class="uf-container-footer">
    <input type="submit" form="form" class="uf-button uf-button-accent" value="Send Feedback"> 
    <button type="button" class="uf-button">Cancel</button>
  </section>
</section>
`;
