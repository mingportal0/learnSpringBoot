package com.mjroh.boot.doc.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mjroh.boot.doc.model.entity.MDocument;

public interface DocRepository extends JpaRepository<MDocument, Long>{
}
