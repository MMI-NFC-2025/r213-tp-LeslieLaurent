export async function setFavori(house) {
    await pb.collection('Maison').update(house.id, { Favori: house.favori });
}
import PocketBase from "pocketbase";
const pb = new PocketBase("https://agence.leslie-laurent.fr/_/");

export async function getOffres() {
    try {
        let data = await pb.collection('Maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

export async function getOffre(id) {
    try {
        const data = await pb.collection('Maison').getOne(id);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

try {
    const grandesMaisons = await pb.collection("Maison").getFullList({ filter: 'surface > 80' });
    console.log(JSON.stringify(grandesMaisons, null, 2));
} catch (e) {
    console.error(e);
}

export async function addOffre(house) {
    try {
        await pb.collection('Maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutee avec succes'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

export async function filterByPrix(minPrix, maxPrix) {
    try {
        const offres = await pb.collection('Maison').getFullList({
            filter: `Prix >= ${minPrix} && Prix <= ${maxPrix}`
        });
        return offres;
    } catch (error) {
        console.log('Erreur lors du filtrage par prix', error);
        return [];
    }
}

export async function getAgents() {
    try {
        return await pb.collection('Agent').getFullList({ sort: 'nom' });
    } catch (error) {
        console.log('Erreur agents', error);
        return [];
    }
}

export async function getOffresByAgent(agentId) {
    try {
        return await pb.collection('Maison').getFullList({
            filter: `agent = "${agentId}"`,
            sort: '-created'
        });
    } catch (error) {
        console.log('Erreur offres par agent', error);
        return [];
    }
}

export async function setFavori(house) {
    await db.collection('maison').update(house.id, {favori: !house.favori});
}