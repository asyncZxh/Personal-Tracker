export function input() {
  return `<div class="add-box">
            <form>
                <label>Title:</label>
                <input id="input-title" type="text" required />

                <label>Target Count:</label>
                <input id="input-target-count" type="number" required />

                <label>Progress Indicator:</label>
                <div>Progress Bar</div>
                <ul>
                  <li>Progress Bar</li>
                  <li>Progress Circular</li>
                </ul>
            </form>
          </div>`;
}
