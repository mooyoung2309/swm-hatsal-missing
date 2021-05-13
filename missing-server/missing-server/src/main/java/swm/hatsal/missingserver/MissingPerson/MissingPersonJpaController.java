package swm.hatsal.missingserver.MissingPerson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MissingPersonJpaController {
    @Autowired
    private MissingPersonMongoDBRepository missingPersonMongoDBRepository;

    // 전체 실종자 list return
    @GetMapping("/missingPeople")
    public List<MissingPerson> retrieveAllMissingPeople() {
        return missingPersonMongoDBRepository.findAll();
    }

    // 실종자 개별 return
    @GetMapping("/missingPeople/{id}")
    public MissingPerson retrieveAllMissingPeople(@PathVariable String id) {
        Optional<MissingPerson> missingPerson = missingPersonMongoDBRepository.findById(id);

        if (missingPerson.isEmpty()) {
            // 없는 경우 front에 없다고 보내기
        }

        // 있는 경우 정보 보내기
        return missingPerson.get();
    }


    @GetMapping("/missingPeople/{id}/comment")
    public MissingPerson MissingPersonAddComment(@PathVariable String id) {
        Optional<MissingPerson> missingPerson = missingPersonMongoDBRepository.findById(id);

        return missingPerson.get();
    }

    @GetMapping("/missingPeople/{id}/info")
    public MissingPerson MissingPersonAddInfo(@PathVariable String id) {
        Optional<MissingPerson> missingPerson = missingPersonMongoDBRepository.findById(id);

        return missingPerson.get();
    }

    @PostMapping("/missingPeople")
    public MissingPerson createMissingPerson(@RequestBody MissingPerson missingPerson) {
        MissingPerson saveMissingPerson = missingPersonMongoDBRepository.save(missingPerson);
        return saveMissingPerson;
    }

}
