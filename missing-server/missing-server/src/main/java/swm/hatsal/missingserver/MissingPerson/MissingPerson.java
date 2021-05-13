package swm.hatsal.missingserver.MissingPerson;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document("missingPeople")
public class MissingPerson {
    @Id
    private String id;
    private String food;
    private String etc;
    private List<String> comment;
}
