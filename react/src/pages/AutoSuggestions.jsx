import { useState } from 'react'

const AutoSuggestions = () => {
    const [query, setQuery] = useState("");
    const [suggestionsList, setSuggestionsList] = useState([]);
    const suggestions = ["React", "Redux", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Next.js"];

    function mockApiCall(searchQuery) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const shouldFail = Math.random() < 0.3; // 30% failure

                if (shouldFail) {
                    reject("API Error: Something went wrong");
                } else {
                    const filteredItems = suggestions.filter(item =>
                        item.toLowerCase().includes(searchQuery)
                    );
                    resolve(filteredItems);
                }
            }, 1000);
        });
    }

    const handleChange = async (e) => {
        const query = e.target.value.toLowerCase();
        suggestionArea.innerHTML = "";
        if (!query) {
            suggestionArea.style.display = "none";
            return;
        }
        if (controller) controller.abort();
        controller = new AbortController();
        const filteredItems = await mockApiCall(query, controller.signal)
        if (filteredItems.length === 0) {
            suggestionArea.style.display = "none";
            return;
        }
        const ul = document.createElement("ul");
        filteredItems?.forEach(item => {
            const li = document.createElement("li");
            li.innerText = item;
            li.style.cursor = "pointer"
            ul.appendChild(li);
        });

        suggestionArea.appendChild(ul);
        suggestionArea.style.display = "block";
    };

    return (
        <div>
            <input value={query} onChange={handleChange} />
        </div>
    )
}

export default AutoSuggestions