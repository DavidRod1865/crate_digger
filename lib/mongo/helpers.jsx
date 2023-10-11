import clientPromise from ".";

let client;
let db;
let vinyls;

async function init() {
    if (db) return;
    try {
        client = await clientPromise;
        db = await client.db("want_list");
        vinyls = await db.collection("vinyls");
        console.log("Connected to Database.");
    } catch (error) {
        throw new Error("Failed to establish connection to Database.");
    }
}

(async () => {
    await init();
})();

export async function getVinyls() {
    try {
        if (!vinyls) await init();
        console.log("Fetching vinyls...");
        const result = await vinyls
            .find({})
            .limit(20)
            .map(user => ({ ...user, _id: user._id.toString() }))
            .toArray();
        return { vinyls: result };
    } catch (error) {
        return { error: "Failed to fetch movies." };
    }
}

export async function postVinyls(id, title, artist, year, label, genre, cover, url) {
    try {
        if (!vinyls) await init();
        console.log("Posting vinyls...");
        const result = await vinyls.insertOne(id);
        return { vinyls: result };
    } catch (error) {
        return { error: "Failed to post movies." };
    }
}
