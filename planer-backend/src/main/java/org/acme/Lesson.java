package org.acme;

import org.apache.derby.client.am.DateTime;

import javax.persistence.*;
import java.util.Date;

@Entity
@NamedQueries({
        @NamedQuery(name = "Lesson.findAll",query = "SELECT l from Lesson l")
})
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String day;
    private Integer index;
    private String subject;
    private String teacher;

    public Lesson(){}
    public Lesson(String day, Integer index, String subject, String teacher) {
        this.day = day;
        this.index = index;
        this.subject = subject;
        this.teacher = teacher;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}
