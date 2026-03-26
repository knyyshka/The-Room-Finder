const roomData = [
    {
        "id": 1,
        "name": "Shivam PG",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 8000, "max": 12000 },
        "gender": "Boys",
        "roomType": "Shared",
        "amenities": ["WiFi", "AC", "TV", "Laundry"],
        "contact": "9876543210",
        "owner": "Rajesh Kumar",
        "available": true
    },
    {
        "id": 2,
        "name": "Krishna Vihar",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 9000, "max": 13000 },
        "gender": "Girls",
        "roomType": "Shared",
        "amenities": ["WiFi", "AC", "Laundry", "Security"],
        "contact": "9876543211",
        "owner": "Priya Singh",
        "available": true
    },
    {
        "id": 3,
        "name": "Sunrise PG",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 10000, "max": 15000 },
        "gender": "Co-ed",
        "roomType": "Single",
        "amenities": ["WiFi", "AC", "TV", "Food Service"],
        "contact": "9876543212",
        "owner": "Vikram Patel",
        "available": true
    },
    {
        "id": 4,
        "name": "Nirvana Homestay",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 7500, "max": 11000 },
        "gender": "Girls",
        "roomType": "Shared",
        "amenities": ["WiFi", "Laundry", "Common Kitchen", "TV"],
        "contact": "9876543213",
        "owner": "Anjali Verma",
        "available": true
    },
    {
        "id": 5,
        "name": "Tech Hub Rooms",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 9500, "max": 14000 },
        "gender": "Boys",
        "roomType": "Single",
        "amenities": ["WiFi", "AC", "Desk", "Gaming Console"],
        "contact": "9876543214",
        "owner": "Arjun Singh",
        "available": false
    },
    {
        "id": 6,
        "name": "Riverside PG",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 8500, "max": 12500 },
        "gender": "Co-ed",
        "roomType": "Shared",
        "amenities": ["WiFi", "AC", "Laundry", "Gym"],
        "contact": "9876543215",
        "owner": "Meera Nair",
        "available": true
    },
    {
        "id": 7,
        "name": "Comfort Inn",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 10500, "max": 15500 },
        "gender": "Girls",
        "roomType": "Single",
        "amenities": ["WiFi", "AC", "TV", "Hot Water", "Wardrobe"],
        "contact": "9876543216",
        "owner": "Divya Sharma",
        "available": true
    },
    {
        "id": 8,
        "name": "Green Valley PG",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 8000, "max": 11500 },
        "gender": "Boys",
        "roomType": "Shared",
        "amenities": ["WiFi", "Laundry", "Common Area", "TV"],
        "contact": "9876543217",
        "owner": "Rohan Chopra",
        "available": true
    },
    {
        "id": 9,
        "name": "Star Residency",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 11000, "max": 16000 },
        "gender": "Co-ed",
        "roomType": "Single",
        "amenities": ["WiFi", "AC", "Food Service", "Security", "Gym"],
        "contact": "9876543218",
        "owner": "Neha Desai",
        "available": true
    },
    {
        "id": 10,
        "name": "Unity Homes",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 9000, "max": 13500 },
        "gender": "Girls",
        "roomType": "Shared",
        "amenities": ["WiFi", "AC", "Laundry", "Security Guard"],
        "contact": "9876543219",
        "owner": "Pooja Reddy",
        "available": true
    },
    {
        "id": 11,
        "name": "Elite PG",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 12000, "max": 17000 },
        "gender": "Boys",
        "roomType": "Single",
        "amenities": ["WiFi", "AC", "Premium Furnishing", "TV", "Balcony"],
        "contact": "9876543220",
        "owner": "Ashish Kumar",
        "available": false
    },
    {
        "id": 12,
        "name": "Peace Retreat",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 8500, "max": 13000 },
        "gender": "Co-ed",
        "roomType": "Shared",
        "amenities": ["WiFi", "AC", "Quiet Zone", "Laundry"],
        "contact": "9876543221",
        "owner": "Sanjana Das",
        "available": true
    },
    {
        "id": 13,
        "name": "Modern Living",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 10000, "max": 14500 },
        "gender": "Girls",
        "roomType": "Single",
        "amenities": ["WiFi", "AC", "TV", "Food Service", "Study Area"],
        "contact": "9876543222",
        "owner": "Nikita Roy",
        "available": true
    },
    {
        "id": 14,
        "name": "Cozy Corner",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 7800, "max": 11200 },
        "gender": "Boys",
        "roomType": "Shared",
        "amenities": ["WiFi", "Laundry", "TV", "Common Kitchen"],
        "contact": "9876543223",
        "owner": "Rahul Gupta",
        "available": true
    },
    {
        "id": 15,
        "name": "Horizon Spaces",
        "address": "Subhash Nagar, Clement Town, Dehradun",
        "priceRange": { "min": 9500, "max": 14500 },
        "gender": "Co-ed",
        "roomType": "Single",
        "amenities": ["WiFi", "AC", "Gym", "Laundry", "Study Lounge"],
        "contact": "9876543224",
        "owner": "Sameer Khan",
        "available": true
    }
];

// Export for both browser and Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = roomData;
}
