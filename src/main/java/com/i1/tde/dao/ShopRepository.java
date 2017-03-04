package com.i1.tde.dao;

import com.i1.tde.domain.Shop;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Sai on 2017/3/5.
 */
public interface ShopRepository  extends JpaRepository<Shop, String> {
}
