/* ===============================
   GLOBAL DATA
=================================*/

let roomsData = [
   {
   id:1,
   name:"Rakhi Girls PG",
   type:"Girls",
   location:"Clement Town",
   cost:4000,
   occupancy:"Shared",
   owner:"Rakhi Nautiyal",
   phone:"6398701786"
   },
   {
   id:2,
   name:"GEU Boys Residency",
   type:"Boys",
   location:"Bell Road",
   cost:5500,
   occupancy:"Single",
   owner:"Amit Rawat",
   phone:"9991112233"
   },
   {
   id:3,
   name:"Green View PG",
   type:"Unisex",
   location:"Subhash Nagar",
   cost:6000,
   occupancy:"Shared",
   owner:"Neha Sharma",
   phone:"8887776665"
   },
   {
   id:4,
   name:"Scholar Stay",
   type:"Boys",
   location:"Clement Town",
   cost:7000,
   occupancy:"Single",
   owner:"Rahul Verma",
   phone:"9123456789"
   },
   {
   id:5,
   name:"Comfort Girls PG",
   type:"Girls",
   location:"Turner Road",
   cost:4500,
   occupancy:"Shared",
   owner:"Pooja Negi",
   phone:"9876543210"
   },
   {
   id:6,
   name:"Society Residency",
   type:"Unisex",
   location:"Society Area",
   cost:8000,
   occupancy:"Single",
   owner:"Ankit Singh",
   phone:"9090909090"
   },
   {
      id: 7,
      name: "Cozy Boys PG",
      owner: "Rajesh Kumar",
      ownerPhone: "9876543210",
      location: "Subhash Nagar, Clement Town",
      cost: 4500,
      type: "shared",
      occupancy: "boys",
      capacity: 2,
      amenities: ["WiFi", "AC", "Parking", "Geyser"],
      description: "Well-maintained PG for boys. Close to campus."
  },
  {
      id: 8,
      name: "Girls Haven PG",
      owner: "Priya Sharma",
      ownerPhone: "8765432109",
      location: "Subhash Nagar, Clement Town",
      cost: 5500,
      type: "single",
      occupancy: "girls",
      capacity: 1,
      amenities: ["WiFi", "AC", "Fridge", "Laundry", "Food"],
      description: "Premium girls PG with modern amenities."
  },
  {
      id: 9,
      name: "Shared Studio Rooms",
      owner: "Amit Patel",
      ownerPhone: "7654321098",
      location: "Subhash Nagar, Clement Town",
      cost: 6000,
      type: "shared",
      occupancy: "both",
      capacity: 2,
      amenities: ["WiFi", "AC", "Parking", "Geyser"],
      description: "Modern shared rooms with attached bathroom."
  },
  {
      id: 10,
      name: "Premium Single Room",
      owner: "Vikram Singh",
      ownerPhone: "6543210987",
      location: "Subhash Nagar, Clement Town",
      cost: 8500,
      type: "single",
      occupancy: "boys",
      capacity: 1,
      amenities: ["WiFi", "AC", "Fridge", "Parking", "Laundry"],
      description: "Premium single room with all facilities."
  },
  {
      id: 11,
      name: "Budget Rooms PG",
      owner: "Mohan Lal",
      ownerPhone: "5432109876",
      location: "Subhash Nagar, Clement Town",
      cost: 3500,
      type: "shared",
      occupancy: "boys",
      capacity: 3,
      amenities: ["WiFi", "Geyser", "Parking"],
      description: "Affordable shared rooms for students."
  },
  {
      id: 12,
      name: "Comfort Girls PG",
      owner: "Sneha Gupta",
      ownerPhone: "4321098765",
      location: "Subhash Nagar, Clement Town",
      cost: 6500,
      type: "shared",
      occupancy: "girls",
      capacity: 2,
      amenities: ["WiFi", "AC", "Fridge", "Food", "Laundry"],
      description: "Comfortable shared rooms for girls."
  },
  {
      id: 13,
      name: "Elite Boys Residence",
      owner: "Rohit Verma",
      ownerPhone: "3210987654",
      location: "Subhash Nagar, Clement Town",
      cost: 9000,
      type: "single",
      occupancy: "boys",
      capacity: 1,
      amenities: ["WiFi", "AC", "Fridge", "Parking", "Laundry"],
      description: "Elite single rooms with premium amenities."
  },
  {
      id: 14,
      name: "Family Rooms PG",
      owner: "Deepak Sharma",
      ownerPhone: "2109876543",
      location: "Subhash Nagar, Clement Town",
      cost: 7000,
      type: "shared",
      occupancy: "both",
      capacity: 3,
      amenities: ["WiFi", "AC", "Parking", "Food", "Geyser"],
      description: "Spacious shared rooms for friends."
  },
  {
      id: 15,
      name: "Modern Studio Apartments",
      owner: "Ananya Roy",
      ownerPhone: "1098765432",
      location: "Subhash Nagar, Clement Town",
      cost: 10000,
      type: "single",
      occupancy: "girls",
      capacity: 1,
      amenities: ["WiFi", "AC", "Fridge", "Parking", "Laundry", "Geyser"],
      description: "Modern studio apartments for girls."
  },
  {
      id: 16,
      name: "Spacious Shared Rooms",
      owner: "Arjun Nair",
      ownerPhone: "9087654321",
      location: "Subhash Nagar, Clement Town",
      cost: 5000,
      type: "shared",
      occupancy: "boys",
      capacity: 2,
      amenities: ["WiFi", "AC", "Parking", "Laundry"],
      description: "Spacious rooms for boys."
  },
  {
      id: 17,
      name: "Student Comfort PG",
      owner: "Neha Kapoor",
      ownerPhone: "8976543210",
      location: "Subhash Nagar, Clement Town",
      cost: 4000,
      type: "shared",
      occupancy: "girls",
      capacity: 2,
      amenities: ["WiFi", "Geyser", "Food", "Laundry"],
      description: "Comfortable and affordable PG for girls."
  },
  {
      id: 18,
      name: "Deluxe Single Rooms",
      owner: "Sanjay Rao",
      ownerPhone: "7876543210",
      location: "Subhash Nagar, Clement Town",
      cost: 11000,
      type: "single",
      occupancy: "boys",
      capacity: 1,
      amenities: ["WiFi", "AC", "Fridge", "Parking", "Laundry", "Geyser"],
      description: "Deluxe single rooms with maximum comfort."
  },
  {
      id: 19,
      name: "Girls Hostel Rooms",
      owner: "Kavya Desai",
      ownerPhone: "6876543210",
      location: "Subhash Nagar, Clement Town",
      cost: 7500,
      type: "shared",
      occupancy: "girls",
      capacity: 2,
      amenities: ["WiFi", "AC", "Fridge", "Parking", "Food", "Laundry"],
      description: "Hostel-style rooms for girls."
  },
  {
      id: 20,
      name: "Boys Residence Plus",
      owner: "Karan Singh",
      ownerPhone: "5876543210",
      location: "Subhash Nagar, Clement Town",
      cost: 5500,
      type: "shared",
      occupancy: "boys",
      capacity: 3,
      amenities: ["WiFi", "AC", "Parking", "Geyser", "Laundry"],
      description: "Spacious shared accommodation for boys."
  },
  {
      id: 21,
      name: "Comfort Zone Apartments",
      owner: "Ravi Patel",
      ownerPhone: "4876543210",
      location: "Subhash Nagar, Clement Town",
      cost: 3000,
      type: "single",
      occupancy: "both",
      capacity: 1,
      amenities: ["WiFi", "AC", "Fridge", "Parking", "Laundry"],
      description: "Comfortable apartments for both boys and girls."
  }
   ];
   
   let filteredRooms=[...roomsData];
   
   
   /* ===============================
      NAVIGATION
   =================================*/
   
   function navigate(view){
   document.querySelectorAll(".view-section")
   .forEach(v=>v.classList.remove("active"));
   
   document.getElementById(view).classList.add("active");
   
   if(view==="search"){
   loadRooms();
   }
   }
   
   
   /* ===============================
      LOGIN SYSTEM
   =================================*/
   
   function handleLoginSubmit(e){
   e.preventDefault();
   
   const name=document.getElementById("login-name").value;
   const role=document.querySelector('input[name="role"]:checked').value;
   
   localStorage.setItem("username",name);
   localStorage.setItem("role",role);
   localStorage.setItem("loggedIn","true");
   
   updateNavbar();
   
   if(role==="student"){
   navigate("search");
   loadRooms();
   }else{
   navigate("owner-dashboard");
   }
   }
   
   function handleLogout(){
   localStorage.clear();
   updateNavbar();
   navigate("home");
   }
   
   
   /* ===============================
      NAVBAR UPDATE
   =================================*/
   
   function updateNavbar(){
   
   const loggedIn=localStorage.getItem("loggedIn");
   const role=localStorage.getItem("role");
   const name=localStorage.getItem("username");
   
   const loginBtn=document.getElementById("nav-login-btn");
   const userMenu=document.getElementById("nav-user-menu");
   
   if(loggedIn==="true"){
   loginBtn.classList.add("hidden");
   userMenu.classList.remove("hidden");
   
   document.getElementById("nav-username").innerText=name;
   
   if(role==="owner"){
   document.getElementById("nav-owner-dash").classList.remove("hidden");
   }
   
   }else{
   loginBtn.classList.remove("hidden");
   userMenu.classList.add("hidden");
   }
   }
   
   
   /* ===============================
      LOAD ROOMS (STUDENT VIEW)
   =================================*/
   
   function loadRooms(){
   
   const role=localStorage.getItem("role");
   
   if(role!=="student") return;
   
   const container=document.getElementById("search-cards");
   container.innerHTML="";
   
   filteredRooms.forEach(room=>{
   
   container.innerHTML+=`
   <div class="bg-white p-5 rounded-xl shadow border">
   <h3 class="font-bold text-lg">${room.name}</h3>
   <p class="text-gray-500">${room.location}</p>
   
   <p class="text-indigo-600 font-semibold mt-2">
   ₹${room.cost}/month
   </p>
   
   <p class="text-sm mt-1">
   ${room.type} • ${room.occupancy}
   </p>
   
   <div class="mt-4 flex justify-between">
   <span class="text-sm">Owner: ${room.owner}</span>
   
   <button type="button"
   class="bg-indigo-600 text-white px-3 py-1 rounded"
   onclick="contactOwner('${room.phone}')">
   Contact
   </button>
   </div>
   </div>
   `;
   });
   
   document.getElementById("results-count")
   .innerText=filteredRooms.length+" Results";
   }
   
   
   /* ===============================
      FILTER SYSTEM ⭐ FIXED
   =================================*/
   
   function filterRooms(){
   
   const type=document.getElementById("filter-type").value;
   const maxRent=document.getElementById("filter-rent").value;
   const location=document.getElementById("filter-location").value;
   
   filteredRooms=roomsData.filter(room=>{
   
   return (type==="All"||room.type===type)
   && room.cost<=maxRent
   && (location==="All"||room.location===location);
   
   });
   
   loadRooms();
   }
   
   function updateRentLabel(){
   const val=document.getElementById("filter-rent").value;
   document.getElementById("rent-val").innerText="₹"+val;
   }
   
   function resetFilters(){
   
   document.getElementById("filter-type").value="All";
   document.getElementById("filter-location").value="All";
   document.getElementById("filter-rent").value=15000;
   
   updateRentLabel();
   
   filteredRooms=[...roomsData];
   loadRooms();
   }
   
   
   /* ===============================
      OWNER ADD ROOM
   =================================*/
   
   function toggleAddRoomForm(){
   document.getElementById("add-room-form")
   .classList.toggle("hidden");
   }
   
   function handleAddRoomSubmit(e){
   e.preventDefault();
   
   const newRoom={
   id:Date.now(),
   name:document.getElementById("new-title").value,
   type:document.getElementById("new-type").value,
   location:"Clement Town",
   cost:5000,
   occupancy:"Shared",
   owner:localStorage.getItem("username"),
   phone:"0000000000"
   };
   
   roomsData.push(newRoom);
   
   alert("Property Added Successfully!");
   
   document.getElementById("add-room-form").reset();
   }
   
   
   /* ===============================
      CONTACT OWNER
   =================================*/
   
   function contactOwner(phone){
   alert("Contact Owner: "+phone);
   }
   
   
   /* ===============================
      MOBILE MENU
   =================================*/
   
   function toggleMobileMenu(){
   document.getElementById("mobile-menu")
   .classList.toggle("hidden");
   }
   
   
   /* ===============================
      PAGE LOAD
   =================================*/
   
   window.onload=function(){
   
   updateNavbar();
   
   const role=localStorage.getItem("role");
   
   if(role==="student"){
   filteredRooms=[...roomsData];
   loadRooms();
   }
   };
   function applyHomeSearchAndNavigate() {

      const loggedIn = localStorage.getItem("loggedIn");
  
      // 🚫 User not logged in
      if (loggedIn !== "true") {
          showToast("Please login first to search PGs", "error");
          navigate("login");
          return;
      }
  
      // ✅ User logged in → apply filters
      const location =
          document.getElementById("home-search-location").value;
  
      const type =
          document.getElementById("home-search-type").value;
  
      document.getElementById("filter-location").value = location;
      document.getElementById("filter-type").value = type;
  
      navigate("search");
  
      filterRooms();
  }
  function showToast(message, type = "success") {

   const container = document.getElementById("toast-container");

   const toast = document.createElement("div");
   toast.className = `toast ${type}`;
   toast.innerText = message;

   container.appendChild(toast);

   setTimeout(() => {
       toast.classList.add("toast-hide");
       setTimeout(() => toast.remove(), 300);
   }, 2500);
}