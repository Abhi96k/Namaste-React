// User Profile Component Styles
export const userProfileStyles = {
  userProfile: "w-full min-h-screen bg-gray-50 py-12 px-4",
  profileCard:
    "max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden",
  profileHeader:
    "bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6",
  avatar: "w-32 h-32 rounded-full border-4 border-white shadow-lg",
  profileInfo: "flex-1 text-center md:text-left",
  profileName: "text-4xl font-bold mb-2",
  username: "text-blue-100 text-xl mb-2",
  bio: "text-blue-50 leading-relaxed text-lg",
  profileDetails: "p-8 space-y-6",
  detailItem: "flex items-center space-x-4 text-gray-700 text-lg",
  infoIcon: "text-3xl",
  stats: "flex justify-around p-8 bg-gray-50 border-t",
  stat: "text-center",
  statNumber: "block text-3xl font-bold text-gray-800",
  statLabel: "text-base text-gray-600 mt-2",
  profileActions: "p-8 border-t",
  githubBtn:
    "w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-lg transition duration-200 text-center block text-lg",
};

export const userClassStyles = {
  userClassContainer:
    "w-full min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center",
  userClassCard: "w-full max-w-lg bg-white rounded-xl shadow-lg p-8",
  userClassTitle: "text-3xl font-bold text-gray-800 mb-8 text-center",
  userClassInfo: "space-y-4 mb-8",
  userClassField: "text-gray-700 text-lg p-3 bg-gray-50 rounded-lg",
  userClassCount:
    "text-xl font-semibold text-blue-600 mb-6 text-center p-4 bg-blue-50 rounded-lg",
  incrementBtn:
    "w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition duration-200 text-lg",
};

export const restaurantMenuStyles = {
  restaurantMenu: "w-full min-h-screen bg-gray-50 py-8 px-4",
  restaurantHeader:
    "w-full max-w-7xl mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl mb-8 shadow-2xl",
  restaurantTitle: "text-5xl mb-4 font-bold",
  restaurantInfo: "my-3 text-xl opacity-90",
  menuCategories: "w-full max-w-7xl mx-auto flex flex-col gap-8",
  category: "w-full bg-white rounded-xl p-8 shadow-lg border border-gray-200",
  categoryTitle:
    "text-gray-700 text-4xl mb-6 pb-4 border-b-4 border-blue-500 font-semibold",
  subCategory: "mb-8",
  subCategoryTitle: "text-gray-600 text-3xl mb-6 font-medium",
  menuItems:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4",
  menuItem:
    "bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full",
  itemImage: "w-full h-52 object-cover border-b border-gray-200",
  itemInfo: "p-6 flex-grow flex flex-col",
  itemTitle: "text-gray-700 text-xl mb-3 font-semibold leading-tight",
  itemPrice: "font-bold text-green-600 text-xl mb-3",
  itemDescription: "text-gray-600 text-base leading-relaxed mb-4 flex-grow",
  itemRating:
    "bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium self-start mt-auto",
  loading: "w-full text-center text-2xl text-gray-600 py-16",
};

export const restaurantCardStyles = {
  resCard:
    "w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full",
  resLogo: "w-full h-52 object-cover",
  cardContent: "p-6 space-y-3 flex-grow",
  cardTitle: "font-semibold text-xl text-gray-800 truncate",
  cardCuisines: "text-gray-600 text-base truncate",
  cardRating: "text-green-600 font-medium text-lg",
  cardCost: "text-gray-700 font-medium text-lg",
  cardTime: "text-blue-600 text-base",
};

export const bodyStyles = {
  body: "w-full min-h-screen bg-gray-50 py-8",
  filter:
    "w-full max-w-7xl mx-auto px-4 mb-8 flex flex-col lg:flex-row gap-6 items-center justify-between",
  searchContainer: "flex gap-3 w-full max-w-xl",
  searchInput:
    "flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg",
  searchButton:
    "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-200 text-lg",
  filterButton:
    "bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition duration-200 text-lg",
  resContainer:
    "w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
  loading: "w-full text-center text-2xl text-gray-600 py-16",
  noResults: "w-full text-center text-2xl text-gray-600 py-16 col-span-full",
};

export const contactStyles = {
  contactContainer: "w-full min-h-screen bg-gray-50 py-12",
  contactContent: "w-full max-w-6xl mx-auto px-4",
  contactTitle: "text-5xl font-bold text-center text-gray-800 mb-6",
  contactIntro: "text-2xl text-center text-gray-600 mb-16",
  contactGrid: "grid lg:grid-cols-2 gap-16",
  contactInfo: "space-y-10",
  infoTitle: "text-3xl font-semibold text-gray-800 mb-8",
  infoItem: "flex items-start space-x-6",
  infoIcon: "text-3xl",
  infoDetails: "flex-1",
  infoSubtitle: "font-semibold text-gray-800 mb-2 text-xl",
  infoText: "text-gray-600 text-lg",
  contactForm: "w-full bg-white rounded-xl shadow-lg p-10",
  formTitle: "text-3xl font-semibold text-gray-800 mb-8",
  formGroup: "mb-8",
  formInput:
    "w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg",
  formTextarea:
    "w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical text-lg",
  submitBtn:
    "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-200 text-lg",
};

export const skeletonStyles = {
  skeletonContainer:
    "w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
  skeletonCard:
    "w-full bg-white rounded-xl shadow-lg overflow-hidden animate-pulse h-96",
  skeletonImg: "w-full h-52 bg-gray-300",
  skeletonText: "h-5 bg-gray-300 rounded mx-6 mb-4",
  skeletonTitle: "h-7 bg-gray-300 rounded mx-6 mt-6 mb-4",
  skeletonSubtitle: "w-3/4",
  skeletonRating: "w-1/2",
  skeletonPrice: "w-2/3",
  skeletonTime: "w-1/2 mb-6",
};

export const aboutStyles = {
  aboutContainer: "w-full min-h-screen bg-gray-50 py-12",
  aboutContent: "w-full max-w-6xl mx-auto px-4",
};

export const groceryStyles = {
  groceryContainer:
    "w-full min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center",
  groceryContent:
    "text-center text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed",
};

export const tailwindStyles = {
  ...userProfileStyles,
  ...userClassStyles,
  ...restaurantMenuStyles,
  ...restaurantCardStyles,
  ...bodyStyles,
  ...contactStyles,
  ...skeletonStyles,
  ...aboutStyles,
  ...groceryStyles,
};
