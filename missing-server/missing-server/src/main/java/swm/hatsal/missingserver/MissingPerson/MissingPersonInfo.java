package swm.hatsal.missingserver.MissingPerson;

import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class MissingPersonInfo {
	@Id
    private String id;
    // 추가적인 정보
    private String info;
}
