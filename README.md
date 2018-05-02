# CryptoDemocracy

## Abstract
An election can be described as a political festival in the system of Democracy. Despite its importance to the public, people often overlook the importance and decide not to vote. CryptoDemocracy is a service that can transform this political festival into a really fun event by combining the election to gambling. By doing so, We want to encourage people to vote, and them to engage in the politics more.

## Description
CryptoDemocracy operates on the Ethereum network. A user can bet to the candidate of Seoul city mayor. A user wins a bet, can get Ether which bet to the loser. To make it more interesting, User who bet early would get a considerable amount of reward.

----

## 개요

민주주의 제도 아래에서 선거는 하나의 축제나 다름없다. 그러나 그 사안의 중요성과는 달리, 사람들은 투표를 통한 주권 행사의 중요성을 간과하곤 한다. **CryptoDemocracy**(가제) 는 이를 재미있는 베팅시스템과 접목시켜 투표에 대한 관심과, 시민들의 주권 행사를 독려하고자 한다.

## 설명

**CryptoDemocracy** 는 이더리움 네트워크 위에서 동작한다. 유저들은 이더리움을 이용해 서울시장 선거에 나선 후보들에게 베팅을 할 수 있다. 당선된 후보에게 베팅한 유저들에게는 낙선한 후보들에게 베팅된 금액을 배분된다. 베팅의 재미와 참여도를 높이기 위해, 베팅에 일찍 참여한 유저들에게는 더 큰 보상이 주어지며, 배분 비율은 아래 공식에 따라 정해진다.


## 배분 방식
1. 유저의 포지션을 변수로 하는 지정된 함수의 결과값을 R(Reward ratio) 이라고 한다.
    - 유저의 포지션 : x
    - `R = f(x)`
2. 유저의 베팅금액을 `A(amount)` 라고 한다.
3. R과 A 값의 곱의 총합을 구한다. ( `ΣR*A` )
    - `RA = R*A`
    - RA 의 총합 S(Sum) 를 구한다.
4. 실제 보상은 A와 R의 곱의 총합을 Rebalancing 하여 계산된다.
    - Fund 는 낙선한 후보에게 베팅된 총 금액으로 분배될 금액이다.
    - `Reward = (RA/S)*Fund`

## R 을 구하는 식

[](https://github.com/wangki/CryptoDemocracy/blob/master/Chart.png?raw=true)

`R = (1/√x)` 위 식은 포지션에 따른 값의 변화가 크게 보이도록 임의로 100 을 곱한 식임.


## 주의
이 서비스는 이더리움 Rinkeby 네트워크에서 사용할 수 있습니다.
