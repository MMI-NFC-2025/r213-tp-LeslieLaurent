import PocketBase from 'pocketbase';

const pb = new PocketBase("https://agence.leslie-laurent.fr/_/");

async function getOffres() {
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

async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

async function getOffre(id) {
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

async function addOffre(house) {
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

async function filterByPrix(minPrix, maxPrix) {
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

async function getAgents() {
    try {
        return await pb.collection('Agent').getFullList({ sort: 'nom' });
    } catch (error) {
        console.log('Erreur agents', error);
        return [];
    }
}

async function getOffresByAgent(agentId) {
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

export { getAgents as a, addOffre as b, getOffres as c, getOffre as d, getImageUrl as e, filterByPrix as f, getOffresByAgent as g };
