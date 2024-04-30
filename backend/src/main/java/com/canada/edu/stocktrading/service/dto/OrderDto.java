package com.canada.edu.stocktrading.service.dto;

import com.canada.edu.stocktrading.model.Symbol;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
    private Integer orderId;

    private Symbol symbol;

    private String orderSide;

     private Integer filledQuantity;

    private Date filledTime;

    private BigDecimal limitPrice;

    private BigDecimal avgPrice;

    private String orderType;

}
