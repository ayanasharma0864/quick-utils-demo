# quick-utils-demo

Live interactive demo web application for [`@ayanasharma0864/quick-utils`](https://www.npmjs.com/package/@ayanasharma0864/quick-utils) — a tiny, dependency-free TypeScript string and utility helper library.

🔗 **Live Demo:** [https://ayanasharma0864.github.io/quick-utils-demo/](https://ayanasharma0864.github.io/quick-utils-demo/)  
📦 **npm Package:** [https://www.npmjs.com/package/@ayanasharma0864/quick-utils](https://www.npmjs.com/package/@ayanasharma0864/quick-utils)  
💻 **Library Repository:** [https://github.com/ayanasharma0864/quick-utils](https://github.com/ayanasharma0864/quick-utils)

---

## Functions Demonstrated

- **`slugify(text)`**: Converts text into clean URL-friendly slugs.
- **`capitalize(text)`**: Capitalizes the first letter of a string.
- **`truncate(text, maxLength)`**: Clips long text and adds an ellipsis.
- **`randomId(length)`**: Generates random alphanumeric IDs.
- **`sleep(ms)`**: Promise-based non-blocking delay helper.

---

## Package Installation

To use `@ayanasharma0864/quick-utils` in your own project:

```bash
npm i @ayanasharma0864/quick-utils
```

### Quick Usage

```ts
import { slugify, capitalize, truncate, randomId, sleep } from "@ayanasharma0864/quick-utils";

console.log(slugify("Hello World!")); // "hello-world"
console.log(capitalize("hello")); // "Hello"
console.log(truncate("Hello World!", 5)); // "Hell…"
console.log(randomId(8)); // e.g. "k3x9a1qz"

await sleep(1000); // delays for 1 second
```

---

## Running the Demo Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/ayanasharma0864/quick-utils-demo.git
   cd quick-utils-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## License

MIT © [ayanasharma0864](https://github.com/ayanasharma0864)
