package swm.hatsal.missingserver.MissingPerson;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MissingPersonMongoDBRepository extends MongoRepository<MissingPerson, String> {
}
