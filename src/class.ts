interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 20000, category: "Điện tử" },
    { id: 2, name: "Smartphone", price: 15000, category: "Điện tử" },
    { id: 3, name: "Bánh mì", price: 20, category: "Thực phẩm" },
    { id: 4, name: "Nước ngọt", price: 15, category: "Thực phẩm" },
    { id: 5, name: "Tủ lạnh", price: 5000, category: "Điện tử" },
];

function filterByCategory(productList: Product[], category: string): Product[] {
    return productList.filter(p => p.category === category);
}

function calculateTotalPrice(productList: Product[]): number {
    return productList.reduce((total, p) => total + p.price, 0);
}

function findMinMax(productList: Product[]): { min: Product; max: Product } {
    let min = productList[0];
    let max = productList[0];

    for (let p of productList) {
        if (p.price < min.price) min = p;
        if (p.price > max.price) max = p;
    }

    return { min, max };
}

console.log("Sản phẩm thuộc danh mục Điện tử:", filterByCategory(products, "Điện tử"));
console.log("Tổng giá trị sản phẩm:", calculateTotalPrice(products));
console.log("Rẻ nhất và đắt nhất:", findMinMax(products));

interface Vehicle {
    name: string;
    type: string;
    speed: number; // km/h
}

enum FuelType {
    XANG = "Xăng",
    DIEN = "Điện",
}

interface MotorizedVehicle extends Vehicle {
    fuelType: FuelType;
}

function calculateTravelTime(vehicle: Vehicle, distance: number): number {
    return distance / vehicle.speed;
}

const vehicles: MotorizedVehicle[] = [
    { name: "Honda Wave", type: "Xe máy", speed: 60, fuelType: FuelType.XANG },
    { name: "VinFast VF e34", type: "Ô tô", speed: 80, fuelType: FuelType.DIEN },
    { name: "Toyota Camry", type: "Ô tô", speed: 100, fuelType: FuelType.XANG },
];

vehicles.forEach(v => {
    const time = calculateTravelTime(v, 100);
    console.log(`${v.name} (${v.type}, ${v.fuelType}) đi 100km mất ${time.toFixed(2)} giờ`);
});
