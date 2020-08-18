export const formatter = arr => {
  return arr.map(
     ({ name, location, phone: phone_number, picture: image_url, email }) => ({
      id: Math.round(Math.random() * 100000000),
      name: `${name.first[0].toUpperCase()}${name.first
        .split("")
        .slice(1)
        .join("")} ${name.last[0].toUpperCase()}${name.last
        .split("")
        .slice(1)
        .join("")}`,
      location: `${location.city[0].toUpperCase()}${location.city
        .split("")
        .slice(1).join('')}, ${location.state[0].toUpperCase()}${location.state
        .split("")
        .slice(1).join('')}`,
      phone_number: phone_number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"),
      image_url: image_url.large,
      email
    })
  );
};
