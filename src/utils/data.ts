// You might put this in a testing utility file, or use it directly in your form's default values for testing.

interface MockCarData {
  make: string;
  model: string;
  year: number;
  mileage: number;
  hp: number; // Horsepower - assuming you added this to your schema (or will add soon)
  color?: string;
  vin?: string;
  description?: string;
  trim?: string;
  engineType?: string;
  transmissionType?: string;
  purchaseDate?: string; // YYYY-MM-DD format for date input
  mainImageUrl?: string;
}

const mockCar1: MockCarData = {
  make: "Porsche",
  model: "911 Carrera S",
  year: 2023,
  mileage: 4500,
  hp: 443, // Horsepower
  color: "Python Green",
  vin: "WP0AA2A94P1123456",
  description:
    "Recent acquisition. Perfect daily driver with exhilarating performance.",
  trim: "Carrera S",
  engineType: "Flat-6",
  transmissionType: "PDK",
  purchaseDate: "2024-03-15",
  mainImageUrl:
    "https://wzuwewzxzmdqsacrmect.supabase.co/storage/v1/object/public/car-images/porsche_911_green.webp", // Example URL from your bucket
};

const mockCar2: MockCarData = {
  make: "Ferrari",
  model: "SF90 Stradale",
  year: 2021,
  mileage: 1800,
  hp: 986, // Horsepower (PHEV combined)
  color: "Rosso Corsa",
  vin: "ZFFAG92C0M1123456",
  description: "Weekend toy. Hybrid beast. Absolute thrill on the track.",
  trim: "Standard",
  engineType: "Twin-turbo V8 Hybrid",
  transmissionType: "8-speed DCT",
  purchaseDate: "2023-09-01",
  mainImageUrl:
    "https://wzuwewzxzmdqsacrmect.supabase.co/storage/v1/object/public/car-images/ferrari_sf90_red.webp",
};

const mockCar3: MockCarData = {
  make: "BMW",
  model: "M3 Competition",
  year: 2022,
  mileage: 12000,
  hp: 503, // Horsepower
  color: "Brooklyn Grey Metallic",
  vin: "WBSJA910XN1123456",
  description: "Workhorse. Practical yet powerful. Custom exhaust installed.",
  trim: "Competition",
  engineType: "Inline-6 Turbo",
  transmissionType: "8-speed Automatic",
  purchaseDate: "2022-06-20",
  mainImageUrl:
    "https://wzuwewzxzmdqsacrmect.supabase.co/storage/v1/object/public/car-images/bmw_m3_grey.webp",
};

const mockCar4: MockCarData = {
  make: "Ford",
  model: "Mustang GT",
  year: 1967,
  mileage: 75000, // Vintage mileage
  hp: 390, // For 390cid engine
  color: "Brittany Blue",
  vin: "7R02S123456", // Shorter VIN for classics
  description:
    "Restored classic. A joy to drive on sunny weekends. Heads turn everywhere.",
  trim: "Fastback",
  engineType: "V8",
  transmissionType: "4-speed Manual",
  purchaseDate: "2020-11-10",
  mainImageUrl:
    "https://wzuwewzxzmdqsacrmect.supabase.co/storage/v1/object/public/car-images/mustang_classic_blue.webp",
};

// You can create an array of these for populating lists
export const mockCars = [mockCar1, mockCar2, mockCar3, mockCar4];
