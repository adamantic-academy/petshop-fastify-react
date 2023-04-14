import {AnimalContractServiceInterface} from './interface/AnimalContractServiceInterface';
import {Animal} from './entity';
import {BlockchainServiceInterface} from '../fabric/interface/BlockchainServiceInterface';
import {getBlockchainService} from '../common/ServiceFactory';
import config from '../../config/Config';
import {TextDecoder} from 'util';

export class AnimalContractService implements AnimalContractServiceInterface {

    private blockchainService: BlockchainServiceInterface = getBlockchainService();
    private utf8Decoder = new TextDecoder();

    async creteAnimal(animal: Animal): Promise<string> {
        const gateway = await this.blockchainService.connect();
        const network = gateway.getNetwork(config.fabric.channel.name);
        const contract = network.getContract(config.fabric.chaincode.name);
        try {
            const commit = await contract.submitAsync('createAsset',
                {arguments: ["9", animal.name, "5", animal.created_at.toString(), "312312"]});

            const resultJson = this.utf8Decoder.decode(commit.getResult());
            console.log(resultJson);
            return commit.getTransactionId();
        } catch (error) {
            console.log("Error during the transaction with message: ", error);
            throw error;
        }
    }

}
