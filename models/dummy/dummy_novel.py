import random
import json

# Sample data for tags and types
tags_list = ["Action", "Adventure", "Romance", "Fantasy", "Comedy", "Sci-Fi"]
novel_types = ["manga", "manhwa", "comic"]
status_list = ["ongoing", "completed", "dropped"]

# Function to generate a random JSON object for a novel
def generate_novel():
    return {
        "title": "Title " + str(random.randint(1, 100)),
        "description": "Description of the novel.",
        "image_url": "https://example.com/image_" + str(random.randint(1, 100)) + ".jpg",
        "rating": round(random.uniform(0, 5), 2),
        "author": "Author " + str(random.randint(1, 10)),
        "translator": "Translator " + str(random.randint(1, 5)),
        "genre": random.sample(tags_list, random.randint(1, 3)),
        "status": random.choice(status_list),
        "type": random.choice(novel_types)
    }

# Create an array of 30 novel records
novel_records = [generate_novel() for _ in range(30)]

print(json.dumps({"batch": novel_records}))
