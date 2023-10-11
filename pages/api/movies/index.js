import { getVinyls } from '../../../lib/mongo/helpers';

const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            const { movies, error } = await getVinyls();

            if (error) throw new Error(error);

            return res.status(200).json({ movies });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);  // use 405 and correct the method reference
}

export default handler;
