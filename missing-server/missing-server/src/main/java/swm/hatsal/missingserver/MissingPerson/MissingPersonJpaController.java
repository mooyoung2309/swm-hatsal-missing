package swm.hatsal.missingserver.MissingPerson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.*;

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
            return null;
        }

        // 있는 경우 정보 보내기
        return missingPerson.get();
    }

    // 사용자 댓글
    @PostMapping("/missingPeople/{id}/comment")
    public MissingPerson MissingPersonAddComment(@PathVariable String id, @RequestBody MissingPersonComment missingPersonComment){
        Optional<MissingPerson> missingPerson = missingPersonMongoDBRepository.findById(id);
        if (missingPerson.isEmpty()) {
            MissingPerson newMissingPerson = new MissingPerson();
            newMissingPerson.setId(id);
            newMissingPerson.setInfo(null);
            newMissingPerson.setComment(List.of(missingPersonComment.getComment()));
            MissingPerson savedMissingPerson = missingPersonMongoDBRepository.save(newMissingPerson);
            return savedMissingPerson;
        }else{
            List<String> commentList = missingPerson.get().getComment();
            if(commentList == null){
                commentList = new ArrayList<String>();
            }
            commentList.add(missingPersonComment.getComment());
            missingPerson.get().setComment(commentList);
            MissingPerson saveMissingPerson = missingPersonMongoDBRepository.save(missingPerson.get());
            return saveMissingPerson;
        }

    }

    @PostMapping("/missingPeople/{id}/info")
    public MissingPerson MissingPersonAddInfo(@PathVariable String id, @RequestBody MissingPersonInfo missingPersonInfo) {
        Optional<MissingPerson> missingPerson = missingPersonMongoDBRepository.findById(id);//id 찾고
        if(missingPerson.get().getInfo().isEmpty()) {
        	MissingPerson saveInfo = missingPersonMongoDBRepository.save(missingPersonInfo);
        	return saveInfo;
        }
        missingPerson.get().setInfo(missingPersonInfo.getInfo());//id찾은 것의 객체에 받아온 info정보 넣어주기
        MissingPerson saveMissingPerson = missingPersonMongoDBRepository.save(missingPerson);//id찾은 객체를 저장
        return missingPerson.get();
    }

    // dummy data
    @PostMapping("/missingPeople")
    public MissingPerson createMissingPerson(@RequestBody MissingPerson missingPerson) {
        MissingPerson saveMissingPerson = missingPersonMongoDBRepository.save(missingPerson);
        return saveMissingPerson;
    }
}
