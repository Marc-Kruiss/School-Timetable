package DbRepository;

import org.acme.Lesson;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@ApplicationScoped
public class DbRepository {

    @Inject
    private EntityManager em;

    public void init() throws ParseException {
        this.create(new Lesson("Monday",0,"SYP","Stropek"));
        this.create(new Lesson("Tuesday",1,"Englisch","Reiter"));
        this.create(new Lesson("Wednesday",2,"Geografie","Jäger"));
    }

    public List<Lesson> findAll() {
        return em.createNamedQuery("Lesson.findAll",Lesson.class).getResultList();
    }

    @Transactional
    public Lesson create(Lesson lesson) {
        em.persist(lesson);
        return lesson;
    }

    @Transactional
    public Lesson update(Lesson lesson) {
        em.merge(lesson);
        return lesson;
    }

    @Transactional
    public Lesson delete(Long id) {
        Lesson l = em.find(Lesson.class, id);
        em.remove(l);
        return l;
    }

    public Lesson find(long id) {
        return em.find(Lesson.class, id);
    }
}
