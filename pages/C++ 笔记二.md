public:: true
category:: programming
sub-category:: cpp
type:: blog
date:: [[Nov 3rd, 2023]]

- https://www.learncpp.com/cpp-tutorial/composition/
- we’ll explore the nuances of the relation types “part-of”, “has-a”, “uses-a”, “depends-on”, and “member-of”, and show how they can be useful in the context of C++ classes.
- This process of building complex objects from simpler ones is called **object composition**.
- Broadly speaking, object composition models a “has-a” relationship between two objects. A car “has-a” transmission. Your computer “has-a” CPU. You “have-a” heart. The complex object is sometimes called the whole, or the parent. The simpler object is often called the part, child, or component.
- **Composition**: Composition relationships are **part-whole** relationships where the part must constitute part of the whole object.
- To qualify as a **composition**, an object and a part must have the following relationship:
	- The part (member) is **part of** the object (class)
	- The part (member) can only **belong to** one object (class) at a time
	- The part (member) has its **existence managed** by the object (class)
	- The part (member) **does not know about the existence** of the object (class)
- In a composition relationship, the object is responsible for the existence of the parts. Most often, this means the part is created when the object is created, and destroyed when the object is destroyed. But more broadly, it means the object manages the part’s lifetime in such a way that the user of the object does not need to get involved. For example, when a body is created, the heart is created too. When a person’s body is destroyed, their heart is destroyed too. Because of this, composition is sometimes called a “death relationship”.(对象管理部分的全生命周期)
- we can be more precise and say that composition models “part-of” relationships (a heart is part-of a body, a numerator is part of a fraction). Composition is often used to model physical relationships, where one object is physically contained inside another.
- **Aggregation**
- To qualify as an **aggregation**, a whole object and its parts must have the following relationship:
	- The part (member) is **part of** the object (class)
	- The part (member) can (if desired) **belong to** more than one object (class) at a time
	- The part (member) does *not* have its existence managed by the object (class)
	- The part (member) **does not know about the existence** of the object (class)
- Association
- To qualify as an **association**, an object and another object must have the following relationship:
	- The associated object (member) is otherwise unrelated to the object (class)
	- The associated object (member) can belong to more than one object (class) at a time
	- The associated object (member) does *not* have its existence managed by the object (class)
	- The associated object (member) may or may not know about the existence of the object (class)
- Unlike a composition or aggregation, where the part is a part of the whole object, in an association, the associated object is otherwise unrelated to the object. Just like an aggregation, the associated object can belong to multiple objects simultaneously, and isn’t managed by those objects. However, unlike an aggregation, where the relationship is always unidirectional, in an association, the relationship may be unidirectional or bidirectional (where the two objects are aware of each other).
- The relationship between doctors and patients is a great example of an association. The doctor clearly has a relationship with his patients, but conceptually it’s not a part/whole (object composition) relationship. A doctor can see many patients in a day, and a patient can see many doctors (perhaps they want a second opinion, or they are visiting different types of doctors). Neither of the object’s lifespans are tied to the other.
-