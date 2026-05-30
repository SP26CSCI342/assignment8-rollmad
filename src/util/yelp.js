const searchBusinesses = async (term, location, sortBy) => {
  const baseUrl =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const endpoint = `${baseUrl}/api/yelp/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error('Failed to fetch businesses from Yelp');
  }

  const jsonResponse = await response.json();

  return jsonResponse.businesses.map((business) => {
    return {
      id: business.id,
      imageSrc: business.image_url,
      name: business.name,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.location.zip_code,
      category: business.categories[0]?.title || 'Restaurant',
      rating: business.rating,
      reviewCount: business.review_count
    };
  });
};

export default searchBusinesses;
