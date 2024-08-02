export const fetchPayments = async () => {
    try {
        const mockAPI = new Promise((resolve, reject) => {
            const data = [
                { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
                { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
                { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
                { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
                { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 16 },
                { id: 6, lastName: "Melisandre", firstName: "Jorah", age: 150 },
                { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
                { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
                { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
                { id: 10, lastName: "Bolton", firstName: "Ramsay", age: 22 },
                { id: 11, lastName: "Greyjoy", firstName: "Theon", age: 25 },
                { id: 12, lastName: "Tyrell", firstName: "Margaery", age: 28 },
                { id: 13, lastName: "Baratheon", firstName: "Stannis", age: 42 },
                { id: 14, lastName: "Martell", firstName: "Oberyn", age: 40 },
                { id: 15, lastName: "Tarly", firstName: "Samwell", age: 24 },
                { id: 16, lastName: "Mormont", firstName: "Jorah", age: 45 },
                { id: 17, lastName: "Baelish", firstName: "Petyr", age: 37 },
                { id: 18, lastName: "Hound", firstName: "Sandor", age: 35 },
                { id: 19, lastName: "Brienne", firstName: "Tarth", age: 32 },
                { id: 20, lastName: "Tully", firstName: "Brynden", age: 58 },
                { id: 21, lastName: "Arryn", firstName: "Lysa", age: 41 },
                { id: 22, lastName: "Mormont", firstName: "Lyanna", age: 12 },
                { id: 23, lastName: "Clegane", firstName: "Gregor", age: 39 },
                { id: 24, lastName: "Frey", firstName: "Walder", age: 90 },
                { id: 25, lastName: "Karstark", firstName: "Rickard", age: 56 },
                { id: 26, lastName: "Tarth", firstName: "Selwyn", age: 60 },
                { id: 27, lastName: "Bolton", firstName: "Roose", age: 46 },
                { id: 28, lastName: "Dayne", firstName: "Arthur", age: 34 },
                { id: 29, lastName: "Payne", firstName: "Podrick", age: 19 },
                { id: 30, lastName: "Reed", firstName: "Meera", age: 18 },
            ];
            setTimeout(() => {
                resolve({ data, status: true, message: "success" });
            }, 2000);
        });

        const response:any = await mockAPI;
        if (!response.status) { 
            throw new Error(response.message);
        } else {
            return response.data;
        }
    } catch (err: any) {

        throw new Error(err.message);
    }

};