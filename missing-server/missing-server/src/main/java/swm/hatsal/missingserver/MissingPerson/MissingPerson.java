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

    // 추가적인 정보
    private String info;

    // 댓글
    private List<String> comment;
}
